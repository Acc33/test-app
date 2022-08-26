import React,{useState, useRef, useEffect} from 'react';


export const Collapsible = (props) => {

    const [isOpen,setIsOpen] = useState(false);

    const parentRef = useRef();
    const color = props.color;
    return (
        <div className="collapsible">
            <button className="toggle" style={{backgroundColor:color}} onClick={() => setIsOpen(!isOpen)}>{props.label}</button>
            <div className="content-parent" 
                ref={parentRef} 
                style={isOpen ? 
                    {
                        height: parentRef.current.scrollHeight + 'px',
                    }
                    :{
                        height: '0px',
                    }
                }
            >
                <div className="content">{props.children}</div>
            </div>
        </div>
    )
}

export default Collapsible;
