const Details = (tech) => {
    const { img } = tech
    const { id } = useParams()
    console.log(id)
    return ( 
        <div>
            <img src={img} alt="" />
        </div>
    );
}
 
export default Details;