var agora=new Date()
var diasem=agora.getDay()
switch(diasem){
    case 0:
        console.log('Hoje é domingo')
        break
    case 1:
        console.log('Hoje é segunda')
        break
    case 2:
        console.log('Hoje é terça')
        break
    case 3:
        console.log('Hoje é quarta' )
        break
    case 4:
        console.log('Hoje é quinta')
        break
    case 5:
        console.log('hoje é sexta')
        break
    default:
        console.log('hoje é sabado')
}