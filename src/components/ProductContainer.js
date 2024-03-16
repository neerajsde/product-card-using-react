import Item from './Item';
import './ProductContainer.css'

function ProductConatiner(props){
    return (
        <div className='box'>
            {props.productData.map((item, index) => (
                <Item
                    key={index} // Key should be unique, using index as key here, but ideally, you should use a unique identifier from your data
                    name={item.name}
                    desc={item.desc}
                    month={item.date.month}
                    year={item.date.year}
                    day={item.date.day}
                />
            ))}
        </div>
    )
}

export default ProductConatiner;