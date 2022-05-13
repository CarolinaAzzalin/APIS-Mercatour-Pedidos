import { GetPedidos, PedidosAdd, ConcludePedido, GetPedidosEntregador, PedidoEntregue } from './Infra/dbFunctions.js'
import express from 'express'
const app = express()

app.use(express.json())


app.get('/pedidos/list', async function (req, res) {

    const PedidosList = await GetPedidos()
    res.json({
        mensagem: 'Lista de pedidos para o mercado',
        PedidosList
    })

})

app.post('/pedidos/create', async function (req, res) {
    const pedido = req.body

    const novoPedido = await PedidosAdd(pedido)

    res.json({
        mensagem: 'Novo pedido cadastrado com sucesso',
        pedido
    })
})
app.put('/pedidos/status/:id', async function (req, res) {
    const id = req.params.id

    const concludePedido = await ConcludePedido(id)

    res.json({
        mensagem: 'Seu pedido já está com o entregador'
    })
})

app.get('/pedidosEntregador/list', async function (req, res) {

    const PedidosList = await GetPedidosEntregador()
    res.json({
        mensagem: 'Lista de pedidos para o entregador',
        PedidosList
    })

})
app.put('/pedidosEntregador/status/:id', async function (req, res) {
    const id = req.params.id

    const concludePedido = await PedidoEntregue(id)

    res.json({
        mensagem: 'Seu pedido foi entregue'
    })
})


app.listen(3000)