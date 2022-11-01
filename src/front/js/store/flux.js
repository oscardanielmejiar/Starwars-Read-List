const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiURL: "https://swapi.dev/api/",
      people: [],
      vehicles: [],
      planets: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      fetchPeople: () => {
        const store = getStore();
        fetch(`${store.apiURL}/people`)
          .then((response) => response.json())
          .then((data) => {
            setStore({ people: data.results });
          })
          .then(() => console.log(store.people))
          .catch(function (error) {
            console.log("error", error);
          });
      },
      fetchPlanets: () => {
        const store = getStore();
        fetch(`${store.apiURL}/planets/`)
          .then((response) => response.json())
          .then((data) => {
            setStore({ planets: data.results });
          })
          .then(() => console.log(getStore.planets))
          .catch(function (error) {
            console.log("error", error);
          });
      },

      fetchVehicles: () => {
        const store = getStore();
        fetch(`${store.apiURL}/vehicles`)
          .then((response) => response.json())
          .then((data) => {
            setStore({ vehicles: data.results });
          })
          .then(() => console.log(getStore.vehicles))
          .catch(function (error) {
            console.log("error", error);
          });
        /**
						fetch().then().then(data => setStore({ "foo": data.bar }))
					*/
      },
      addToFavorite: (itemName) => {
        const oldFavorites = getStore().favorites;
        const foundFavorite = oldFavorites.find((item) => item === itemName);
        if (foundFavorite) {
          const newArray = oldFavorites.filter(
            (item) => item !== foundFavorite
          ); //remove item
          setStore({ favorites: newArray });
        } else {
          setStore({ favorites: [...oldFavorites, itemName] });
        }
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
