import React, { Component } from 'react';
import Main from '../template/Main';
import axios from "axios";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Nome, Email e Senha'
}

export default class UserCrud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            id: 0,
            name: '',
            email: '',
            password: ''
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/api/")
            .then((res) => {
                this.setState({
                    users: res.data,
                    id: 0,
                    name: '',
                    email: '',
                    password: ''
                })
            })
    }
    submit(event, id) {
        event.preventDefault();
        if (id === 0) {
            axios.post("http://localhost:8080/api/", {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
                .then((res) => {
                    this.componentDidMount();
                })
        } else {
            axios.put("http://localhost:8080/api/update", {
                id: this.state.id,
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }).then(() => {
                this.componentDidMount();
            })

        }

    }
    delete(id) {
        axios.delete(`http://localhost:8080/api/delete/${id}`)
            .then(() => {
                this.componentDidMount();
            })
    }
    edit(id) {
        axios.get(`http://localhost:8080/api/${id}`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    email: res.data.email,
                    password: res.data.password
                })
            })
    }
    renderForm() {
        return (
            <div className="form">
                <form onSubmit={(e) => this.submit(e, this.state.id)}>
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label >Nome</label>
                                <input onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} type="text" className="form-control"
                                    placeholder=" Digite o Nome" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>E-mail</label>
                                <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="email" className="form-control"
                                    placeholder=" Digite o Email" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Senha</label>
                                <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} type="password" className="form-control"
                                    placeholder=" Digite a Senha" />
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary " name="action">
                                Salvar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    renderRows() {
        return this.state.users.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={(e) => this.edit(user.id)}
                        >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger.ml-2"
                            onClick={() => this.delete(user.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}