import React from 'react'
// import '../css/pictures.css';

type Properties = 
{
    variant?: string
    children?: React.ReactNode;
}

export const Accordion = ({variant, children}: Properties) => 
{
    // const clax: string = `well ${variant} tooltips`

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="panel-group panel-default" id="accordionA">
                    <div className="panel panel-default">
                        <a data-toggle="collapse" data-parent="#accordionA" href="#collapseOne"><div className="panel-heading"><h2>Accordion Panel Group #1</h2></div></a>
                        <div id="collapseOne" className="collapse in">
                            <div className="panel-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <a data-toggle="collapse" data-parent="#accordionA" href="#collapseTwo"><div className="panel-heading"><h2>Accordion Panel Group #2</h2></div></a>
                        <div id="collapseTwo" className="collapse">
                            <div className="panel-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <a data-toggle="collapse" data-parent="#accordionA" href="#collapseThree"><div className="panel-heading"><h2>Accordion Panel Group #3</h2></div></a>
                        <div id="collapseThree" className="collapse">
                            <div className="panel-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}