
export const Button = (props) => {
  return (
    <div>
    <button className='py-1 px-6 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full'>
    {props.title}
    </button>
    </div>
  )
}
