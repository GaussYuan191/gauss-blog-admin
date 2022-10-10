import { useBoolean, useMount, useSetState } from 'ahooks';
import { Divider, message, Table } from 'antd';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import PageLayout from '../../common/components/page-layout';
import { delArt, getArts } from '../../utils/api';
import { columns } from './article-config';
import './index.scss';
const ArticleDraft = (props: RouteComponentProps) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useSetState({ current: 1, total: 0 });
  const [loading, { set }] = useBoolean(false);
  const getPageList = async () => {
    set(true);
    const { data } = await getArts({ current_page: page.current, state: 2 });
    if (data.code) {
      const { pagination } = data.result;
      setList(data?.result?.list || []);
      setPage({ current: pagination.current_page, total: pagination.total });
    }
    set(false);
  };
  // 编辑
  async function edit(id: string) {
    props.history.push(`/article-add?id=${id}`);
  }
  // 删除
  async function del(id: string) {
    const { data } = await delArt(id);
    if (data.code) {
      message.success(data.message);
      setPage({ current: 1, total: 0 });
      await getPageList();
    }
  }
  const components = { body: { cell: TCell } };
  const tableColumns = columns.map((col) => {
    if (col.dataIndex === 'operation') {
      return {
        ...col,
        onCell: (record: any, rowIndex: number) => ({ col, record, edit, del, rowIndex }),
      };
    }
    return col;
  });
  useMount(async () => {
    await getPageList();
  });
  return (
    <PageLayout title="草稿箱">
      <Table
        components={components}
        columns={tableColumns as any}
        loading={loading}
        dataSource={list || []}
        bordered
        size="middle"
        pagination={page}
        rowKey="_id"
      />
    </PageLayout>
  );
};

function Operate(props: any) {
  const { edit, del, record } = props;
  const view = () => {
    console.log('view');
  };
  return (
    <div className="t_btn">
      <span onClick={view}>查看</span>
      <Divider type="vertical" />
      <span onClick={() => edit(record._id)}>修改</span>
      <Divider type="vertical" />
      <span onClick={() => del(record._id)}>删除</span>
    </div>
  );
}
function TCell(props: any) {
  const { children, col } = props;
  const res: any = col && col.dataIndex === 'operation' ? <Operate {...props} /> : children;
  return <td>{res}</td>;
}
export default ArticleDraft;
