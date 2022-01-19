const formatDate = (date) => {
    return `${new Date(date).getFullYear()}/${new Date(date).getMonth() + 1 }/${new Date(date).getDay()}` 
}

export default formatDate;