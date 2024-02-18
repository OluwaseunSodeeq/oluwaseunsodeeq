function Container({ children }) {
  return (
    <div className={`w-full  md:w-full lg:w-full lg:max-w-full bg-plain-white`}>
      {children}
    </div>
  );
}

export default Container;
