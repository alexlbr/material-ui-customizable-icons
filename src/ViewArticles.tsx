/* tslint:disable:max-line-length */
import * as React from 'react';
import SvgIcon from "./SvgIcon";


interface Pallet {
  primary: string;
}

class ViewArticles extends SvgIcon {
  public displayName: string = 'ViewArticles';
  public group(style: any, pallet: Pallet): JSX.Element {
    return (
      <g>
        <path d="M 1 1, L 23 1, L 23 11, L 1 11, L 1 1" stroke="transparent" fill={pallet.primary} strokeWidth="0" />
        <path d="M 1 13, L 23 13, L 23 23, L 1 23, L 1 13"  stroke="transparent" fill={pallet.primary} strokeWidth="0" />
      </g>
    );
  }
  public render() {
    const pallet: Pallet = {
      primary: this.props.pallet.primary || this.context.muiTheme.icon.color,
    };
    const style = {
      ...this.styles,
      ...this.context.muiTheme.icon,
      ...this.props.style,
    };
    return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
  }
}


export default ViewArticles;