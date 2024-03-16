import './InputProductDetails.css'

let itemName = '';
let date = '';
let description = '';
// split date
let dateComponents;
let _year;
let _month;
let _day;
const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];  

function getInput(event){
    itemName = event.target.value;
}

function getDate(event){
    date = event.target.value;
    dateComponents = date.split('-');
    _year = dateComponents[0];
    _month = months[dateComponents[1] - 1];  
    _day = dateComponents[2];
}

function getDesc(event){
    description = event.target.value;
}



function InputProductDetails(props){
    function addProduct(){
        if(itemName === '' && date === ''){
            alert('Please fill product details');
        }
        else if(itemName === ''){
            alert('Please add product name');
        }
        else if(date === ''){
            alert('Please add manufacture date');
        }
        else{
            const newdata = {
                name: itemName,
                desc: description,
                date: {
                    month: _month,
                    year: _year,
                    day: _day
                }
            };
            props.getDataFun(newdata);
        }
    }
    return (
        <form>
            <h1>Add New Product</h1>
            <div className='item-name field'>
                <label>Item Name</label>
                <input type='text' id='item_name' placeholder='Enter Product Name' onChange={getInput}></input>
            </div>

            <div className='item-date field'>
                <label>Date</label>
                <input type='date' onChange={getDate}></input>
            </div>

            <div className='item-desc field'>
                <label>Add Description</label>
                <textarea rows='7' id='item_desc' placeholder='Enter description' onChange={getDesc}></textarea>
            </div>

            <button type='button' onClick={addProduct}>Add Product</button>
        </form>
    )
};

export default InputProductDetails;