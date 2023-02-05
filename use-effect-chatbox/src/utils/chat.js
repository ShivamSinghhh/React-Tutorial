export  const users = [
    {id: 1, name: "Arjeet"},
    {id: 2, name: "Gyan"},
    {id: 3, name: "Shivam"},
   
];

export default function createConnection (user){
    console.log(`started listening to ${user.name}`);
    let id;
    function Listen(callback){
         id = setInterval(()=>{
            let message = `new message from ${user.name} at ${new Date().toTimeString()}}`;
            callback(message); 
        },3000);
    }

    function unsubscribe(){
        console.log(`stopped listening to ${user.name}`);
        clearInterval(id);
    }
    return {Listen,unsubscribe}
}
