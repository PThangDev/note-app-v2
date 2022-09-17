import { FC } from "react";
import classnames from "classnames/bind";

import styles from "./Template.module.scss";

const cx = classnames.bind(styles);

interface Props {}

const Template: FC<Props> = (props) => {
  return <div className={cx("wrapper")}>Template</div>;
};

export default Template;
