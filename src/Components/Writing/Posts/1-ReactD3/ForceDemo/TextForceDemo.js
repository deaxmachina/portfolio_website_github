import React from "react";

const TextForceDemo = () => {
  return (
    <div>
      <div>
       Have a look at the complete code here <a href="/" target="_blank" className="post__link">[pen]</a>
      </div>
      <br />
      <ul className="post__list-in-body">
        <li>
          <span className="post__highlighted-text">Store the graph nodes</span> as you would for any other data in a React state 
          <code className="code">const [nodes, setNodes] = useState(null);</code>
        </li>
        <li>
          <span className="post__highlighted-text">Get D3 and React to talk to each other</span> via useRef and useEffect. 
          Define a reference to the group element containing your D3 graph like so
          <code className="code">const gRef = useRef();</code> and don't forget to include the ref as an attr of the element itself 
          <code className="code">&lt;g ref=&#123;gRef&#125;&gt;&lt;/g&gt;</code> and then select the group element inside 
          <code className="code">useEffect</code> like so <code className="code">const g = d3.select(gRef.current)</code>
        </li>
        <li>
          <span className="post__highlighted-text">White all your D3 code to define your d3-force graph inside the useEffect</span> 
          and make sure to include the our data, i.e. the nodes, in the array of dependencies 
          of the <code className="code">useEffect</code> at the end. This will make sure the code is ran and the DOM updated 
          each time the data changes, such as with the use of the random button in our case. 
        </li>
      </ul>
    </div>
  )
};

export default TextForceDemo;