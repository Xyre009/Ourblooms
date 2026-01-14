import sm1a from '../assests/servicesmodule1/img.png'
function services () {
  return (
    <section>
        <div className=" servicd_content">
    <div className={s}>
        <p> Floral installations</p>
        <p className=" paragraph1">
            we create clean, contemporary designs
        </p>

    </div>
    <picture>
        <source media="(min-width: 600px)" srcSet={sm1a} /> 
    </picture>
        </div>
    </section>
  );
}
export default services;