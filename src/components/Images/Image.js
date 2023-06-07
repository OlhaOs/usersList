export default function Image({thumbnailUrl, title}) {
  return (
    <> 
      <img src={thumbnailUrl} alt={title} className='albumImg' />
    </>
  );
}
