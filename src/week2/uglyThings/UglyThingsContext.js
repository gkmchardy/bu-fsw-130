import React, { Component } from "react"
const { Provider, Consumer } = React.createContext()

class ContextProvider extends Component {
  state = {
    uglyLists: [
      {
        uglyTitle: "Pontiac Aztek",
        uglydescription: "Two cars squashed on top of each other",
        uglyImage: "/images/cars/aztek.jpg",
        comments: ["Why would anyone own this?"],
      },
      {
        uglyTitle: "Nissan Juke",
        uglydescription: "An insect on wheels",
        uglyImage: "/images/cars/juke.jpg",
        comments: ["Someone needs to squash it."],
      },
      {
        uglyTitle: "Fiat Multipla",
        uglydescription: "Why does it need another set of headlights?",
        uglyImage: "/images/cars/multipla.jpg",
        comments: ["Who even thought of this concept?"],
      },
    ],
  }

  uglyDelete = (e) => {
    console.log("deleting")
    this.setState((prevState) => ({
      uglyLists: prevState.uglyLists.filter((thingItem, index) => {
        console.log("delete", e.target.id)
        return index !== Number(e.target.id)
      }),
    }))
  }
  
  uglyCommentDelete = (e, itemIndex) => {
    console.log("deleting", itemIndex)
    this.setState((prevState) => ({
      uglyLists: prevState.uglyLists.map((thingItem, index) => {
        console.log("delete", e.target.id)
        if (index === itemIndex) {
          console.log(index, itemIndex)
         thingItem.comments = thingItem.comments.filter((comment, i) => {
            console.log(i, Number(e.target.id))
            return i !== Number(e.target.id)
          })
        }
        return thingItem
      }),
    }))
  }

  updateItems = (uglyLists) => {
    console.log(uglyLists)
    this.setState({ uglyLists })
  }

  render() {
    const { uglyLists } = this.state
    return (
      <Provider
        value={{
          uglyLists: uglyLists,
          updateItems: this.updateItems,
          uglyDelete: this.uglyDelete,
          uglyCommentDelete: this.uglyCommentDelete,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { ContextProvider, Consumer as ContextConsumer }
