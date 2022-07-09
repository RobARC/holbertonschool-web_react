import { React } from "react";
import PropTypes from 'prop-types';
import { CourseListRow } from './CourseListRow';
import './CourseList.css';
import { CourseShape } from './CourseShape';

export default function CourseList(listCourses) {
    return (

        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Availables courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {
                    listCourses.length === 0
                        ? <CourseListRow textFirstCell="No course available yet" />
                        : listCourses.map((course) => <CourseListRow
                            key={course.id}
                            textFirstCell={course.name}
                            textSecondCell={course.credit} />)
                }
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(
        PropTypes.shape(CourseShape)
    )
}

CourseList.defaultProps = {
    listCourses: []
}

