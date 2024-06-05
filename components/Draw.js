class Draw {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.defaultFillColor = "#C25800";
        this.defaultBorderColor = "#663300";
        this.defaultBorderWidth = 2;
        this.defaultTextColor = "#0095DD";
        this.defaultFont = "16px Arial";
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBall(x, y, ballRadius) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.defaultFillColor;
        this.ctx.fill();
        this.ctx.strokeStyle = this.defaultBorderColor;
        this.ctx.lineWidth = this.defaultBorderWidth;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawPaddle(paddleX, paddleWidth, paddleHeight) {
        this.ctx.beginPath();
        this.ctx.rect(paddleX, this.canvas.height - paddleHeight, paddleWidth, paddleHeight);
        this.ctx.fillStyle = this.defaultFillColor;
        this.ctx.fill();
        this.ctx.strokeStyle = this.defaultBorderColor;
        this.ctx.lineWidth = this.defaultBorderWidth;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawBricks(bricks, brickRowCount, brickColumnCount, brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft) {
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                if (bricks[c][r].status === 1) {
                    const brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
                    const brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    this.ctx.beginPath();
                    this.ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    if (bricks[c][r].isBonus === 0)
                        this.ctx.fillStyle = this.defaultFillColor;
                    else
                        this.ctx.fillStyle = "#FF8C00"; 
                    this.ctx.fill();
                    this.ctx.strokeStyle = this.defaultBorderColor;
                    this.ctx.lineWidth = this.defaultBorderWidth;
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
            }
        }
    }

    drawText(text, x, y) {
        this.ctx.font = this.defaultFont;
        this.ctx.fillStyle = this.defaultTextColor;
        this.ctx.fillText(text, x, y);
    }
}
