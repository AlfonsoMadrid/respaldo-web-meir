import React from 'react';

import consumo from '../../assets/img/charts/consumo.png';
import reliquidacion from '../../assets/img/charts/reliquidacion.png';
import marginal from '../../assets/img/charts/costo_marginal.png';

export const Acordeon = () => {
    return (
        <div className='acordeon__container'>
            <section id='menu1'>
                <a href='#menu1'>INICIO</a>
                <div className='acordeon__content'>
                    <div>
                        <h3>Resumen informativo</h3>
                        <p>Commodo in labore sint eu consectetur. Et ipsum deserunt officia enim. Dolore adipisicing velit qui eiusmod eu voluptate sint eiusmod amet labore consectetur officia. Consequat aute adipisicing dolor consectetur amet.</p>
                    </div>
                    <div className='acordeon__tumb__chart'>
                        <div>
                            <img src={consumo} alt='consumo_chart' />
                        </div>
                        <div>
                            <img src={reliquidacion} alt='consumo_chart' />
                        </div>
                        <div>
                            <img src={marginal} alt='consumo_chart' />
                        </div>
                    </div>
                </div>
            </section>
            <section id='menu2'>
                <a href='#menu2'>CONSUMO</a>
                <div className='acordeon__content'>
                    <div>
                        <div className='acordeon__chart__tittle'>
                            <h3>Resumen informativo</h3>
                            <p>Amet deserunt cillum ad voluptate amet eu ullamco ea ea est. Est elit ex exercitation est irure sit duis ipsum. Velit sit excepteur laboris qui tempor. Nisi mollit Lorem cupidatat irure cillum dolore ullamco. Aliquip occaecat voluptate sit minim ex adipisicing nulla eu sit irure adipisicing excepteur mollit. Et laboris esse cillum est nostrud et voluptate id est quis in. Cupidatat dolore cillum cillum qui duis velit minim laborum do irure sint.</p>
                        </div>
                        <div className='acordeon__details'>
                            <h4>Detalles</h4>
                            <p>loremAmet excepteur consequat aliqua amet enim. </p>
                            <p>In enim laborum do irure voluptate excepteur aliquip ut exercitation fugiat velit exercitation elit excepteur.</p>
                        </div>
                    </div>
                    <div className='acordeon__chart'>
                        <img src={consumo} alt='consumo_chart' />
                    </div>
                    <div className='acordeon__other__details'>
                        <h4>Otros detalles del Gráfico</h4>
                        <p>loremAmet excepteur consequat aliqua amet enim. Amet deserunt cillum ad voluptate amet eu ullamco</p>
                    </div>
                </div>
            </section>
            <section id='menu3'>
                <a href='#menu3'>RELIQUIDACION</a>
                <div className='acordeon__content'>
                    <div>
                        <div className='acordeon__chart__tittle'>
                            <h3>Resumen informativo</h3>
                            <p>Amet deserunt cillum ad voluptate amet eu ullamco ea ea est. Est elit ex exercitation est irure sit duis ipsum. Velit sit excepteur laboris qui tempor. Nisi mollit Lorem cupidatat irure cillum dolore ullamco. Aliquip occaecat voluptate sit minim ex adipisicing nulla eu sit irure adipisicing excepteur mollit. Et laboris esse cillum est nostrud et voluptate id est quis in. Cupidatat dolore cillum cillum qui duis velit minim laborum do irure sint.</p>
                        </div>
                        <div className='acordeon__details'>
                            <h4>Detalles</h4>
                            <p>loremAmet excepteur consequat aliqua amet enim. </p>
                            <p>In enim laborum do irure voluptate excepteur aliquip ut exercitation fugiat velit exercitation elit excepteur.</p>
                        </div>
                    </div>
                    <div className='acordeon__chart'>
                        <img src={reliquidacion} alt='reliquidacion_chart' />
                    </div>
                    <div className='acordeon__other__details'>
                        <h4>Otros detalles del Gráfico</h4>
                        <p>loremAmet excepteur consequat aliqua amet enim. Amet deserunt cillum ad voluptate amet eu ullamco</p>
                    </div>
                </div>
            </section>
            <section id='menu4'>
                <a href='#menu4'>COSTO MARGINAL</a>
                <div className='acordeon__content'>
                    <div>
                        <div className='acordeon__chart__tittle'>
                            <h3>Resumen informativo</h3>
                            <p>Amet deserunt cillum ad voluptate amet eu ullamco ea ea est. Est elit ex exercitation est irure sit duis ipsum. Velit sit excepteur laboris qui tempor. Nisi mollit Lorem cupidatat irure cillum dolore ullamco. Aliquip occaecat voluptate sit minim ex adipisicing nulla eu sit irure adipisicing excepteur mollit. Et laboris esse cillum est nostrud et voluptate id est quis in. Cupidatat dolore cillum cillum qui duis velit minim laborum do irure sint.</p>
                        </div>
                        <div className='acordeon__details'>
                            <h4>Detalles</h4>
                            <p>loremAmet excepteur consequat aliqua amet enim. </p>
                            <p>In enim laborum do irure voluptate excepteur aliquip ut exercitation fugiat velit exercitation elit excepteur.</p>
                        </div>
                    </div>
                    <div className='acordeon__chart'>
                        <img src={marginal} alt='marginal_chart' />
                    </div>
                    <div className='acordeon__other__details'>
                        <h4>Otros detalles del Gráfico</h4>
                        <p>loremAmet excepteur consequat aliqua amet enim. Amet deserunt cillum ad voluptate amet eu ullamco</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
