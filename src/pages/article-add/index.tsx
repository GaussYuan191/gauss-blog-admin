/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState, useRef } from "react";
import { Button, message, Modal } from "antd";
import type { RouteComponentProps } from "react-router-dom";
import PageLayout from "../../common/components/page-layout";
import BaseInfo from "./base-info";
import Edit from "./edit";
import "./index.scss";
import "./view-article.scss";
import { addArticle, getArtId, mdArt, useQuery } from "../../utils";
export default function AddArticle(props: RouteComponentProps) {
  let myform: any = null;
  const viewArticleDom = useRef<any>(null);
  const [acontent, setAcontent] = useState({ content: "", editContent: "" }); // 编辑文章
  const [article, setArticle] = useState({}); // 文章基本信息
  const [editContent, setEditContent] = useState(""); // 编辑文章
  const [title, setTitle] = useState("");
  const [visible, setVisible] = useState(false); // 文章预览
  const query = useQuery();

  const submit = () => {
    myform.submit();
  };
  const openViewArticle = async () => {
    setVisible(true);
    const res = await mdArt({
      article: acontent.content,
    });
    viewArticleDom.current.innerHTML = res.data.result.html;
  };
  const add = async (article: any, tagIds: string[]) => {
    const params = { ...article, ...acontent };
    const { data } = await addArticle({
      title: params.title,
      keyword: params.keyword,
      descript: params.descript,
      tag: tagIds,
      content: params.content,
      editContent: "",
      state: params.state,
      publish: params.publish,
    });
    if (data.code) {
      message.success(data.message);
      props.history.push("/article");
    }
    console.log("开始添加文章", params);
  };
  const getFormData = (article: any, tagIds: string[]) => {
    if (acontent.content) {
      add(article, tagIds);
    }
  };
  
  const saveFormRef = (formRef: any) => {
    myform = formRef;
  };
  const editChange = (c: string, e: string) => {
    setAcontent({ content: c, editContent: e });
  };
  // 获取编辑数据
  useEffect(() => {
    (async () => {
      const id = query.get("id");
      if (id) {
        const { data } = await getArtId(id);
        if (data.code) {
          setArticle(data.result);
          setEditContent(data.result.content);
          setTitle("编辑文章");
          setAcontent({
            content: data.result.content,
            editContent: data.result.editContent,
          });
        }
      } else {
        setArticle({});
        setEditContent("");
        setTitle("添加文章");
        setAcontent({ content: "", editContent: "" });
      }
    })();
  }, [query]);
  return (
    <PageLayout title={title}>
      <BaseInfo
        submit={getFormData}
        wrappedComponentRef={saveFormRef}
        article={article}
      />
      <Edit content={editContent} editChange={editChange} />
      <div className="btnbox">
        <Button
          type="primary"
          style={{ width: "100px" }}
          onClick={() => submit()}
        >
          提 交
        </Button>
        <Button
          type="primary"
          style={{ width: "100px", marginLeft: "20px" }}
          onClick={openViewArticle}
        >
          预览
        </Button>
        <Button
          danger
          style={{ width: "100px", marginLeft: "20px" }}
          onClick={() => submit()}
        >
          存草稿
        </Button>
      </div>
      <Modal
        title="文章预览"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <div className="view-markdown">
          <div
            ref={viewArticleDom}
            className="theme-default-content content__default"
           />
        </div>
      </Modal>
    </PageLayout>
  );
}
