const decrement = (nr) => {
  return (
    {
      type: 'DECREMENT',
      payload:nr
    }
  )
};

export default decrement;