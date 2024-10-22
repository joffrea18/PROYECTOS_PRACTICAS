// Este servicio me valida el Email

export const getId = async ({ businessA, id }) => {
    const response = await fetch(`/routerinfo/${id}`, {
        method: "GET",
        headers: {
            Authorization: id,
        },
    });

    const json = await response.json();
    console.log(id, businessA);
    // console.log(id);

    if(!response.ok){
        throw new Error(json.message);
    }
    
    return JSON.stringify(json.businessA);
    
    
}