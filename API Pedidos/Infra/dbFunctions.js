import { firebase, db } from "./configDB.js";
import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore";

export function getDate(){
    var today = new Date();

    var date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`
    
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return `${date}  ${time}`
}

//Funcao de consulta de dados em uma collection
export async function GetPedidos(){
    var arr = [] 
    try{  
        const querySnapshot = await getDocs(collection(db, 'pedidosMercado'))
        .then(querySnapshot =>{querySnapshot.forEach((doc) =>{
            arr.push({
                date: doc.data(),
                produtos: doc.produtos,
                cliente: doc.cliente,
                pedido_atendido: 'Em Andamento',
                qtd_produto: doc.qtd_produto,
                valor_pedido: doc.valor_pedido,
                enderecoEntrega: doc.enderecoEntrega,
                nome_Motorista: doc.nome_Motorista,
                dataSaida: null
            })
        })})
        
        return arr

    }catch(e){
        console.log('error: ', e)
    }
}

// Funcao para insercao de dados
export async function PedidosAdd(pedido) {
    try {
        const docRef = addDoc(collection(db, 'pedidosMercado'), 
        pedido
        )
    } catch (e) {
        console.log('error: ', e)
    }
}
// Funcao para alterar status do pedido
export async function ConcludePedido(id) {
    const date = getDate()
    try {

        const toUpdate =  doc(db, "pedidosMercado", `${id}`);

        updateDoc(toUpdate, {
            pedido_atendido: 'Finalizado',            
            nome_Motorista: 'Alisson',
            dataSaida: date
        })

    } catch (e) {
        console.log('error: ', e)
    }
}

//Funcao de consulta de dados em uma collection
export async function GetPedidosEntregador(){
    var arr = [] 
    try{  
        const querySnapshot = await getDocs(collection(db, 'pedidosMercado'))
        .then(querySnapshot =>{querySnapshot.forEach((doc) =>{
            arr.push({
                date: doc.data(),
                produtos: doc.produtos,
                cliente: doc.cliente,
                pedido_atendido: doc.pedido_atendido,
                qtd_produto: doc.qtd_produto,
                valor_pedido: doc.valor_pedido,
                enderecoEntrega: doc.enderecoEntrega,
                nome_Motorista: doc.nome_Motorista,
                dataSaida: doc.dataSaida,
            })
        })})
        
        return arr

    }catch(e){
        console.log('error: ', e)
    }
}
// Funcao para alterar status do pedido
export async function PedidoEntregue(id) {
    const date = getDate()
    try {

        const toUpdate =  doc(db, "pedidosMercado", `${id}`);

        updateDoc(toUpdate, { 
            pedido_atendido: 'Entregue',
            tipo_pagamento: 'Crédito',
            dataSaida: date
        })

    } catch (e) {
        console.log('error: ', e)
    }
}









