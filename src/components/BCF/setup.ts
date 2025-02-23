/* eslint-disable prettier/prettier */
import * as OBC from "@thatopen/components";
import { users } from "../../types/bcf";

export function setupBCF(components: OBC.Components, world: OBC.World) {
    const topics = components.get(OBC.BCFTopics);
    
    topics.setup({
        users: new Set(Object.keys(users)),
        labels: new Set(["Architecture", "Structure", "MEP", "Coordination"]),
    });

    const viewpoints = components.get(OBC.Viewpoints);
    topics.list.onItemSet.add(({ value: topic }) => {
        const viewpoint = viewpoints.create(world);
        topic.viewpoints.add(viewpoint.guid);
    });

    return topics;
}