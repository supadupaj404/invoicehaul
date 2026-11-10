"use client";

import { useEffect, useState } from "react";

const REPORT_URL =
    "https://fueltax.app/quarter-report?utm_source=invoicehaul&utm_medium=banner&utm_campaign=ifta_deadline";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** IFTA returns are due the last day of the month after each quarter ends. */
function deadlineFor(quarter: number, year: number): Date {
    return quarter === 4 ? new Date(year + 1, 0, 31) : new Date(year, quarter * 3 + 1, 0);
}

function bannerText(now: Date): string {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const current = Math.floor(today.getMonth() / 3) + 1;
    // The quarter that most recently ended is the one being filed.
    const filing = current === 1 ? { q: 4, y: today.getFullYear() - 1 } : { q: current - 1, y: today.getFullYear() };
    const due = deadlineFor(filing.q, filing.y);
    const daysLeft = Math.round((due.getTime() - today.getTime()) / 86_400_000);
    const dueLabel = `${MONTHS[due.getMonth()]} ${due.getDate()}`;

    if (daysLeft >= 0) {
        const when = daysLeft === 0 ? "today" : daysLeft === 1 ? "tomorrow" : `${dueLabel}, ${daysLeft} days left`;
        return `IFTA Q${filing.q} ${filing.y} is due ${when}.`;
    }

    const next = deadlineFor(current, today.getFullYear());
    return `Next IFTA deadline: ${MONTHS[next.getMonth()]} ${next.getDate()}. Late on Q${filing.q} ${filing.y}?`;
}

/** Slim strip above the navbar pointing truckers at fueltax.app's pay-once IFTA report. */
const IftaDeadlineBanner = () => {
    // The text depends on today's date, so it is set after mount. Rendering it
    // on the server would bake the build date into the static page.
    const [text, setText] = useState<string | null>(null);
    useEffect(() => {
        setText(bannerText(new Date()));
    }, []);

    if (!text) return null;

    return (
        <a
            href={REPORT_URL}
            target="_blank"
            rel="noopener"
            className="block px-4 py-2 text-center text-xs sm:text-sm font-medium text-white hover:underline"
            style={{ background: "#1a1a1a" }}
        >
            <span className="font-bold" style={{ color: "#4ade80" }}>{text}</span>{" "}
            Get your per-state fuel tax numbers in 5 minutes. $29, no account.
            <span aria-hidden="true"> →</span>
        </a>
    );
};

export default IftaDeadlineBanner;
