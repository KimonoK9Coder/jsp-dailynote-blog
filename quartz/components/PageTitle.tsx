import { pathToRoot } from "../util/path"
import styles from "./styles/pageTitle.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <img src="static/icon.png" alt="Site Icon" class="title-icon"></img>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = styles

export default (() => PageTitle) satisfies QuartzComponentConstructor