import './Button.css'
export default function Button({ btnName, handleClick, id }) {
  return (
    <button type='button' className='btn' onClick={() => handleClick(id)}>
      {btnName}
    </button>
  );
}
