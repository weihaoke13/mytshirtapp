const initialstate ={
    designs:[
        {id:1,name:'Project One',tshirtColor:'black'},
        {id:2,name:'Project Two',tshirtColor:'blue'},
        {id:3,name:'Project Three',tshirtColor:'red'},
        {id:4,name:'Project Four',tshirtColor:'white'},
        {id:5,name:'Project Five',tshirtColor:'blue'}
    ]
}



const designReducer=(state=initialstate,action)=>{
    switch(action.type){
        case'SAVE_DESIGN':
        console.log('design is saved',action.design)
    }
    return state
}

export default designReducer;
