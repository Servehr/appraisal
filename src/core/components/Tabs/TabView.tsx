import React, { AnchorHTMLAttributes, DetailedHTMLProps, useState } from 'react'
import './tab.css';
import { Typography } from '../../controls/index'

type Properties = 
{
    tabs: string
    children?: React.ReactNode;
}

type hit = {
	onClick: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
}

export const TabView = () => 
{
	const [position, setPosition] = useState<number>(-1)

	const makeActive = (index: number) => 
	{
		if(position === -1)
		{
			setPosition(index)
			const removeDefault = document.getElementsByTagName('li')[0];
			removeDefault.setAttribute('class', '');
			const current = document.getElementsByTagName('li')[index];
			current.setAttribute('class', 'activeate');
		} else {
			const previous = document.getElementsByTagName('li')[position];
			previous.setAttribute('class', '');
			const next = document.getElementsByTagName('li')[index];
			next.setAttribute('class', 'activateate');
			setPosition(index)
		}
	}
    // const clax: string = `well ${variant} tooltips`
	// React.DOMAttributes<HTMLAnchorElement>.onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
	// DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>


    return (
		<div className="row">
			<div className="col-sm-4">
				<div className="panel panel-midnightblue">
					<div className="panel-heading detail">
						<h2>
							<ul className="nav nav-tabs">
								<li className="activeate"><a href="#tab-11-1" data-toggle="tab" onClick={() => makeActive(0)}>Tab 1</a></li>
								<li><a href="#tab-11-2" data-toggle="tab" onClick={() => makeActive(1)}>Tab 2</a></li>
								<li><a href="#tab-11-3" data-toggle="tab" onClick={() => makeActive(2)}>Tab 3</a></li>
								<li className="dropdown">
									<a className="dropdown-toggle" data-toggle="dropdown" href="#/">Dropdown<span className="caret"></span></a>
									<ul className="dropdown-menu">
										<li><a href="#/" style={{color:'black', fontSize: 12}}>Something</a></li>
										<li><a href="#/" style={{color:'black', fontSize: 12}}>Something Else</a></li>
										<li className="divider"></li>
										<li><a href="#/" style={{color:'black', fontSize: 12}}>And one more thing</a></li>
									</ul>
								</li>
							</ul>
						</h2>
					</div>
					<div className="panel-body">
						<div className="tab-content">
							<div className="tab-pane active" id="tab-11-1">
								<p>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, blanditiis adipisci eveniet ad sed voluptatum natus voluptatibus vitae deleniti? Iure porro recusandae molestiae molestias similique unde totam non omnis veritatis.</p>
							</div>
							<div className="tab-pane" id="tab-11-2">
								<p>2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, blanditiis adipisci eveniet ad sed voluptatum natus voluptatibus vitae deleniti? Iure porro recusandae molestiae molestias similique unde totam non omnis veritatis.</p>
							</div>
							<div className="tab-pane" id="tab-11-3">
								<p>3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, blanditiis adipisci eveniet ad sed voluptatum natus voluptatibus vitae deleniti? Iure porro recusandae molestiae molestias similique unde totam non omnis veritatis.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}