import style from './less/defaultLoader.module.less'
const DefaultLoader = () => {
return (
    <div className={style.loaderWrapper}>
        <div className={style.loader}></div>
    </div>
)
};

export default DefaultLoader;