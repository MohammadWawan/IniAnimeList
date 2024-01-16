const HeaderMenu = ({ title }) => {
  return (
    <div className="p-8">
      <h1 className="text-center text-2xl font-bold text-color-primary">
        {title}
      </h1>
    </div>
  );
};

export default HeaderMenu;
