class TaskNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Reorganizes a workflow queue by moving
 * ending tasks into alternating positions.
 *
 * @param {TaskNode} head - First task in workflow
 * @returns {void}
 */
function reorganizeWorkflow(head) {
    if (!head || !head.next) return;

    // Find the middle of the workflow
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer.next && fastPointer.next.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    // Reverse second half
    let secondHalf = slowPointer.next;
    slowPointer.next = null;

    let previousNode = null;

    while (secondHalf) {
        const nextNode = secondHalf.next;
        secondHalf.next = previousNode;
        previousNode = secondHalf;
        secondHalf = nextNode;
    }

    // Merge both workflow sections
    let firstPart = head;
    let reversedPart = previousNode;

    while (reversedPart) {
        const firstNext = firstPart.next;
        const secondNext = reversedPart.next;

        firstPart.next = reversedPart;
        reversedPart.next = firstNext;

        firstPart = firstNext;
        reversedPart = secondNext;
    }
}

module.exports = {
    TaskNode,
    reorganizeWorkflow
};
