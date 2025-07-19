import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <img src="/static/icon.png" alt="Site Icon" class="title-icon"></img>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 100%;
  overflow: hidden;
}

.title-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  object-fit: contain;
}

.page-title a {
  text-decoration: none;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

/* 데스크톱에서는 세로 배치 + 큰 아이콘 */
@media (min-width: 1024px) {
  .page-title {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    text-align: center;
  }
  
  .title-icon {
    width: 3rem;
    height: 3rem;
  }
  
  .page-title a {
    white-space: normal;
    text-overflow: unset;
  }
}

/* 태블릿에서는 중간 크기 */
@media (min-width: 768px) and (max-width: 1023px) {
  .title-icon {
    width: 2rem;
    height: 2rem;
  }
}

/* 모바일에서는 작은 크기 유지 */
@media (max-width: 767px) {
  .page-title {
    font-size: 1.5rem;
    gap: 0.4rem;
  }
  
  .title-icon {
    width: 1.2rem;
    height: 1.2rem;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor