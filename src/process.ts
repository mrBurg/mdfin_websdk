import { TProcessProps } from './@types';

import { $ } from './utils';

export class Process {
  constructor(protected props: TProcessProps) {}

  render(children?: string | HTMLElement) {
    const { containerId, preloader } = this.props;

    $(`#${containerId}`).replaceChildren(children || preloader);
  }
}
