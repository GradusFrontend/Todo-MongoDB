import axios from "axios";


interface Todo {
    name: string,
    desc: string,
    _id: string,
    handleClick: () => void
}

function Todo({ name, desc, _id, handleClick }: Todo) {


    console.log(_id);
    
    return (
        <div
            onDoubleClick={() => {
                console.log('dbl');
                
                axios.delete(`http://localhost:3000/api/todos?id=${_id}`)
                    .then((res) => {
                        handleClick()
                    })

            }}
            className="bg-white rounded-xl border border-[#D8D8D8] p-6 flex flex-col gap-3">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-[#A5A5B4] font-semibold max-h-[4lh] overflow-y-scroll no-scrollbar">{desc}</p>
            <div className="flex gap-2.5 font-semibold">
                <span>2024/06/14</span>
                <span>15:00</span>
            </div>

            <span className="font-semibold text-[#007FFF]">В процессе</span>
        </div>
    );
}

export default Todo;