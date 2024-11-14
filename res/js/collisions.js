import { Sprite } from "./sprite.js";
import * as Blocks from "./collisionBlocks.js";
import { GAME_SIZE, ctx } from "./helpers.js";


class CollisionBlock {
    constructor({ position, shape, direction, element }) {
        this.position = position;
        this.shape = shape;
        this.direction = direction;
        this.element = element;
        this.width = 36;
        this.height = 36;

        this.hitbox = {
            position,
            width: this.width,
            height: this.height,
        };
    }

    draw() {
        if (this.shape === "square") {
            ctx.fillStyle = "rgba(255,0,0,0.5)";
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        } else if (this.shape === "triangle") {
            ctx.fillStyle = "rgba(255, 251, 0, 0.575)";
            this.drawTriangle();
        } else if (this.shape === "pond") {
            ctx.fillStyle = "rgba(255, 0, 242, 0.575)";
            ctx.fillRect(this.position.x, this.position.y + 18, this.width, this.height - 18);
        } else if (this.shape === "pondTriangle") {
            ctx.fillStyle = "rgba(255, 0, 242, 0.575)";
            this.drawPondTriangle();
        }
    }

    drawTriangle() {
        if (this.direction.x === "right" && this.direction.y === "up") {
            ctx.beginPath();
            ctx.moveTo(this.position.x, this.position.y);
            ctx.lineTo(this.position.x, this.position.y + this.height);
            ctx.lineTo(this.position.x + this.width, this.position.y + this.height);
            ctx.fill();
        } // Outros casos de triângulos...
    }

    drawPondTriangle() {
        // Lógica para desenhar triângulos de pântano...
    }

    isDeadly() {
        // Considera todos os elementos como letais
        return true; // Morte garantida
    }
}

export function createObjectsFromArray(array) {
    const objects = [];
    const ponds = [];

    for (let i = 0; i < array.length; i++) {
        let shape;
        let direction = { x: null, y: null };
        let element = null;
        let flipImage = false;
        let currentRow;

        switch (array[i]) {
            case Blocks.BLOCK:
                shape = "square";
                break;
            case Blocks.TRIANGLE_LEFT_UP:
                shape = "triangle";
                direction = { x: "left", y: "up" };
                break;
            case Blocks.TRIANGLE_RIGHT_UP:
                shape = "triangle";
                direction = { x: "right", y: "up" };
                break;
            case Blocks.TRIANGLE_LEFT_DOWN:
                shape = "triangle";
                direction = { x: "left", y: "down" };
                break;
            case Blocks.TRIANGLE_RIGHT_DOWN:
                shape = "triangle";
                direction = { x: "right", y: "down" };
                break;
            case Blocks.WATER_POND:
            case Blocks.FIRE_POND:
            case Blocks.ACID_POND:
                shape = "pond";
                break;
            case Blocks.WATER_POND_TRIANGLE_RIGHT:
            case Blocks.FIRE_POND_TRIANGLE_RIGHT:
            case Blocks.ACID_POND_TRIANGLE_RIGHT:
                shape = "pondTriangle";
                direction = { x: "right", y: "up" };
                break;
            case Blocks.WATER_POND_TRIANGLE_LEFT:
            case Blocks.FIRE_POND_TRIANGLE_LEFT:
            case Blocks.ACID_POND_TRIANGLE_LEFT:
                shape = "pondTriangle";
                direction = { x: "left", y: "up" };
                flipImage = true;
                break;
        }

        // Aqui você pode ajustar o elemento, mas não é mais necessário para morte
        // todos os elementos são letais agora
        let newPosition = {
            x: (i % GAME_SIZE.width) * GAME_SIZE.block.width,
            y: Math.floor(i / GAME_SIZE.width) * GAME_SIZE.block.height,
        };

        if (array[i] >= Blocks.FIRE_POND_START_INDEX) {
            ponds.push(
                new Sprite({
                    position: newPosition,
                    imgSrc: `./res/img/ponds.png`,
                    frameRate: 9,
                    imgRows: 6,
                    currentRow: 3, // Use um valor fixo ou ajuste conforme necessário
                    flipImage: flipImage,
                })
            );
        }

        if (array[i] !== Blocks.EMPTY) {
            objects.push(
                new CollisionBlock({
                    position: newPosition,
                    shape: shape,
                    direction: direction,
                    element: element, // Pode ser removido, pois não é necessário
                })
            );
        }
    }

    return {
        objects,
        ponds,
    };
}
