// Este servicio me valida el Email

export const getId = async ({ business, id }) => {
    const response = await fetch(`/routerinfo/${id}`, {
        method: "GET",
        headers: {
            Authorization: id,
        },
    });

    const json = await response.json();
    console.log(id, business);
    // console.log(id);

    if(!response.ok){
        throw new Error(json.message);
    }
    
    return JSON.stringify(json.business);
    
    
}