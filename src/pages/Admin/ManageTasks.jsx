import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATHS } from "../../utils/apiPaths";

function ManageTasks() {
    const [allTasks, setAllTasks] = useState([]);
    const [tabs, setTabs] = useState([]);
    const [filterStatus, setFilterStatus] = useState("All");

    const navigate = useNavigate();

    const getAllTasks = async () => {
        try {
            const response = await axiosInstance.get(
                API_PATHS.TASKS.GET_ALL_TASKS,
                {
                    params: {
                        status: filterStatus === "ALL" ? "" : filterStatus,
                    },
                }
            );
            setAllTasks(
                response.data?.tasks?.length > 0 ? response.data?.tasks : []
            );

            // Map statusSummary data with fixed labels and order

            const statusSummary = response.data?.statusSummary || {};

            const statusArray = [
                { label: "All", count: statusSummary.all || 0 },
                { label: "Pending", count: statusSummary.pendingTasks || 0 },
                {
                    label: "In Progress",
                    count: statusSummary.inProgressTasks || 0,
                },
                {
                    label: "Completed",
                    count: statusSummary.completedTasks || 0,
                },
            ];
            setTabs(statusArray);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleClick = (taskData) => {
        navigate(`/admin/create-task`, { state: { taskId: taskData._id } });
    };

    const handleDownloadReport = async () => {};

    useEffect(() => {
        getAllTasks(filterStatus);

        return () => {};
    }, [filterStatus]);

    return (
        <DashboardLayout activeMenu="ManageTasks">
            <div className="my-5"></div>
        </DashboardLayout>
    );
}

export default ManageTasks;
