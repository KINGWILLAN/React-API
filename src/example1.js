const getinfo = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => setData(response.data))
    .catch((err) => console.log(err))
    .finally(() => {
      setLoading(false);
    });
};

useEffect(() => {
  getinfo();
}, []);

// console.log(loading);

// if (loading) {
//   return <div className="spinning"> We dy fetch ur data</div>;
// }

//  fetch ("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//   return (
