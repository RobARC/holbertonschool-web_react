import { React } from "react";
import { PropTypes } from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <th colSpan="2">
                    {textFirstCell}
                </th>
            )
        }
        return (
            <div>
                <th>
                    {textFirstCell}
                </th>
                <th>

                </th>
            </div>
        )
    }
    return (
        <div>
            <td>
                {textFirstCell}
            </td>
            <td>
                {textSecondCell}
            </td>
        </div>
    )
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default CourseListRow