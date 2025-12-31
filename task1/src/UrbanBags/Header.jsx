import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { NevLink } from "./NevLink";

export function Header(params) {
    return (
        <div className="Header">
            <Logo />
            <NevLink />
            <Icon />
        </div>
    )

}