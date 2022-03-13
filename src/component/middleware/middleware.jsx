export const work = async (chooseFunction,setProductList) => {
    try {
    setProductList(await chooseFunction);
    } catch (error) {
    return alert(error.message);
    }
};
export const workB =async(chooseFunction)=>{
    try {
        console.log(await chooseFunction,'===setvalue');
        } catch (error) {
        return alert(error.message);
        }
}