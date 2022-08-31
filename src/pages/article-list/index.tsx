import { useMount, useRequest } from 'ahooks';
import { Divider, message, Table } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import { useState } from 'react';
import type { RouteComponentProps } from 'react-router';
import PageLayout from '../../common/components/page-layout';

import { delArt, getArts } from '../../utils';
import { columns } from './article-config';
import './index.scss';

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const ArticleList = (props: RouteComponentProps) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState({ current: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(0);

  const pageList = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      const { data } = await getArts();
      console.log('data', data);
      if (data.code && data.code == 1) resolve(data.result);
      else reject(data);
    });
  };
  const { run } = useRequest(pageList, {
    manual: true,
    onSuccess: (data: any) => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { list, pagination } = data;
      setList(list || []);
      setPage({ current: pagination.current_page, total: pagination.total });
      setLoading(false);
    },
    onError: (error) => {
      console.log(error.message);
      setLoading(false);
    },
  });
  useMount(() => {
    run();
  });
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
      setLoad(load + 1);
    }
  }
  const tableColumns = columns.map((col) => {
    if (col.dataIndex === 'operation') {
      return {
        ...col,
        onCell: (record: any) => ({ col, record, edit, del }),
      };
    }
    return col;
  });
  const components = { body: { cell: TCell } };
  function tableChange(pagination: TablePaginationConfig) {
    setPage({ current: pagination.current || 1, total: pagination.total || 0 });
    setLoad(load + 1);
  }

  return (
    <PageLayout title="文章列表">
      <Table
        onChange={tableChange}
        components={components}
        columns={tableColumns as ColumnTypes}
        loading={loading}
        dataSource={list}
        bordered
        size="middle"
        pagination={page}
        rowKey="_id"
      />
    </PageLayout>
  );
};
function TCell(props: any) {
  const { children, col } = props;
  const res: any = col && col.dataIndex === 'operation' ? <Operate {...props} /> : children;
  return <td>{res}</td>;
}
export function Operate(props: any) {
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

export default ArticleList;
