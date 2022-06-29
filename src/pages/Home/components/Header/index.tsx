import style from "./style.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <span>OnHome</span>
      </div>
      <div className={style.navbar}>
        <div className={style.items}>
          <ul>
            <li>Serviços</li>
            <li>Produtos</li>
            <li>Suporte</li>
            <li>Contato</li>
            <li>Login</li>
            <li>Registrar-se</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
