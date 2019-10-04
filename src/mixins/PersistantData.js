export default function(id,fields){
	return{		
		watch:fields.reduce((obj,field)=>{
			//侦听处理函数
			obj[field] = function(val){
				localStorage.setItem(`${id}.${field}`,JSON.stringify(val))
			}
			return obj
		},{}),
		
		methods:{
			saveAllPersistantData(){
				for(const field in fields){
					localStorage.setItem(`${id}.$(field)`,JSON.stringify(this.$data[field]))
				}
			},
		},
		beforeDestory(){
			this.saveAllPersistantData()
		},
		created(){
			console.log('NewTicket created!')
			for	(const field of fields){
				const savedValue = localStorage.getItem(`${id}.${field}`)
				//const savedValue = localStorage.getItem(`${id}.${field}`)
				console.log('savedValue',savedValue)
				if(savedValue !== null){
					this.$data[field] = JSON.parse(savedValue)
					console.log('getItem',this.$data[field])
				}
			}
		},
		
	}

}