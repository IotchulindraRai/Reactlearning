 const EnhancedTable = () => {
     const [count, setCount] = useState(0);
     return (
       <button onClick={() => setCount(count + 1)}>
          Click me {count}
       </button>
     )
  };
export default childcomp
