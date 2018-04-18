import React,{ Component } from 'react';
import { Table ,Icon ,Button ,Popconfirm ,Divider} from 'antd';
import PropTypes from 'prop-types';


class BookList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            bookList : []
        };
    }

    handleDel(record){
        const {store} = this.context;
        store.dispatch({
            type:"DELETEBOOK",
            payload : record.id
        });
    }

    render(){
        const {store} = this.context;
        const bookList = store.book;
        console.log(JSON.stringify(store));

        const columns = [{
            title : '图书编号',
            dataIndex : 'id'
        },{
            title : '名称',
            dataIndex : 'name',
            render : text => <a href="javascript:;">{text}</a>
        },{
            title:'价格',
            dataIndex:'price'
        },{
            title:'借阅人编号',
            dataIndex:'owner_id',
            render : text => <a href="javascript:;">{text}</a>
        },{
            title:'操作',
            render : (text,record) => (
                <span type="ghost">
                    <Button size="small">编辑</Button>
                    <Divider type="vertical" />
                    <Popconfirm title="确定要删除吗？" onConfirm={() => this.handleDel(record)}>
                        <Button size="small" >删除</Button>
                    </Popconfirm>
                </span>
            )
        }];

        return (
            <Table columns={columns} dataSource={bookList} rowKey="id"/>
        );
    }
}

BookList.contextTypes = {
    store: PropTypes.object.isRequired
};

export default BookList;