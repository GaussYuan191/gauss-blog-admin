import { RouteComponentProps } from "react-router";
import { useState } from "react";
import { useRequest, useMount } from "ahooks";
import { Table } from "antd";
import PageLayout from "../../common/components/page-layout";

import { columns } from "./article-config";
import { getArts, delArt } from "../../utils";

const ArticleList = (props: RouteComponentProps) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState({ current: 1, total: 0 });
  const [loading, setLoading] = useState(true);

  const pageList = (): Promise<object> => {
    return new Promise(async (resolve, reject) => {
      let { data } = await getArts();
      console.log("data", data);
      if (data.code && data.code == 1) resolve(data.result);
      else reject(data);
    });
  };
  const { run } = useRequest(pageList, {
    manual: true,
    onSuccess: (result: object) => {
      console.log(result);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  useMount(() => {
    run()
  });
  return (
    <PageLayout title="文章列表">
      {/* <Table columns={columns} pagination={{ position: [top, bottom] }} dataSource={data} /> */}
    </PageLayout>
  );
};

export default ArticleList;
