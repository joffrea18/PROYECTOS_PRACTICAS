// Este servicio me valida el Email

export const getUserEmail = async ({ emailAddress }) => {
    const response = await fetch(`/routerinfo/${emailAddress}`, {
        method: "GET",
        headers: {
            Authorization: emailAddress,
        },
    });

    const json = await response.json();
    // const variable = transformData(json);
    console.log(emailAddress);
    // console.log(id);

    if(!response.ok){
        throw new Error(json.message);
    }

    return json.info;

}