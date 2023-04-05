//ARRAY : REMOVE BY INDEX:
 const removeItem = (targetIndex) => {
    setCart(prev => {
      return prev.filter((item, id) => id !== targetIndex)
    })
  };
