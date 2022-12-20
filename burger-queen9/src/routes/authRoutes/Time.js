export const Time = () =>{
    let Tiempo = Date.now();
    console.log(Tiempo)
         let hoy = new Date(Tiempo);
         console.log(hoy)
    return (
        <>
       {hoy.toLocaleString()}
         </>
    )
}